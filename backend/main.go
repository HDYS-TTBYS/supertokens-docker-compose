package main

import (
	"fmt"
	"log"
	"net/http"
	"net/mail"
	"os"
	"strings"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/cors"
	"github.com/supertokens/supertokens-golang/recipe/dashboard"
	"github.com/supertokens/supertokens-golang/recipe/emailpassword"
	"github.com/supertokens/supertokens-golang/recipe/emailpassword/epmodels"
	"github.com/supertokens/supertokens-golang/recipe/session"
	"github.com/supertokens/supertokens-golang/supertokens"
)

func main() {
	// SuperTokens init...
	apiBasePath := "/api"
	websiteBasePath := "/auth"
	err := supertokens.Init(supertokens.TypeInput{
		Supertokens: &supertokens.ConnectionInfo{
			ConnectionURI: os.Getenv("CONNECTION_URL"),
			APIKey:        os.Getenv("API_KEYS"),
		},
		AppInfo: supertokens.AppInfo{
			AppName:         os.Getenv("APP_NAME"),
			APIDomain:       os.Getenv("API_DOMAIN"),
			WebsiteDomain:   os.Getenv("WEB_SITE_DOMAIN"),
			APIBasePath:     &apiBasePath,
			WebsiteBasePath: &websiteBasePath,
		},
		RecipeList: []supertokens.Recipe{
			dashboard.Init(nil),
			emailpassword.Init(&epmodels.TypeInput{
				SignUpFeature: &epmodels.TypeInputSignUp{
					FormFields: []epmodels.TypeInputFormField{
						{
							ID: "email",
							Validate: func(value interface{}) *string {
								// エラーがない場合は文字列または nil を返す独自の検証。
								v := value.(string)
								_, err := mail.ParseAddress(v)
								if err != nil {
									r := "無効な電子メールアドレスです。"
									return &r
								}
								if strings.Split(v, "@")[1] != "outlook.jp" {
									r := "許可されていないドメインのメールアドレスです。"
									return &r
								}
								return nil
							},
						},
					},
				},
			}),
			session.Init(nil),
		},
	})
	if err != nil {
		panic(err.Error())
	}

	r := chi.NewRouter()

	// CORS
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins: []string{os.Getenv("WEB_SITE_DOMAIN")},
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders: append([]string{"Content-Type"},
			supertokens.GetAllCORSHeaders()...),
		AllowCredentials: true,
	}))

	// SuperTokens Middleware
	r.Use(supertokens.Middleware)

	// Add APIs and start server
	r.Get("/api/health", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("ok"))
	})
	r.Post("/api/likecomment", session.VerifySession(nil, likeCommentAPI))

	log.Fatal(http.ListenAndServe(":8000", r))
}

func likeCommentAPI(w http.ResponseWriter, r *http.Request) {
	// retrieve the session object as shown below
	sessionContainer := session.GetSessionFromRequestContext(r.Context())

	userID := sessionContainer.GetUserID()

	fmt.Println(userID)
}
