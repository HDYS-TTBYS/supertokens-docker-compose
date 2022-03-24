package main

import (
	"net/http"
	"os"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/cors"
	"github.com/supertokens/supertokens-golang/recipe/emailpassword"
	"github.com/supertokens/supertokens-golang/recipe/session"
	"github.com/supertokens/supertokens-golang/supertokens"
)

func main() {
	// SuperTokens init...
	apiBasePath := os.Getenv("API_BASE_PATH")
	websiteBasePath := os.Getenv("WEB_SITE_BASE_PATH")
	websiteDomain := os.Getenv("WEB_SITE_DOMAIN")
	appName := os.Getenv("APP_NAME")
	apiDomain := os.Getenv("API_DOMAIN")
	err := supertokens.Init(supertokens.TypeInput{
		Supertokens: &supertokens.ConnectionInfo{
			ConnectionURI: os.Getenv("CONNECTION_URL"),
			APIKey:        os.Getenv("API_KEYS"),
		},
		AppInfo: supertokens.AppInfo{
			AppName:         appName,
			APIDomain:       apiDomain,
			WebsiteDomain:   websiteDomain,
			APIBasePath:     &apiBasePath,
			WebsiteBasePath: &websiteBasePath,
		},
		RecipeList: []supertokens.Recipe{
			emailpassword.Init(nil),
			session.Init(nil),
		},
	})
	if err != nil {
		panic(err.Error())
	}

	r := chi.NewRouter()

	// CORS

	r.Use(cors.Handler(cors.Options{
		AllowedOrigins: []string{websiteDomain},
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders: append([]string{"Content-Type"},
			supertokens.GetAllCORSHeaders()...),
		AllowCredentials: true,
	}))

	// SuperTokens Middleware
	r.Use(supertokens.Middleware)

	// Add APIs and start server
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("welcome"))
	})
	http.ListenAndServe(":8000", r)
}
