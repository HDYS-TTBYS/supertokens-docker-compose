import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuperTokens, { SuperTokensWrapper, getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import EmailVerification from "supertokens-auth-react/recipe/emailverification";
import Session, { SessionAuth } from "supertokens-auth-react/recipe/session";
import * as reactRouterDom from "react-router-dom";
import Index from "./pages/Index";


SuperTokens.init({
    languageTranslations: {
        // This object contains all translation related options
        translations: {
            ja: {
                EMAIL_PASSWORD_EMAIL_LABEL: "Eメール",
                EMAIL_PASSWORD_EMAIL_PLACEHOLDER: "Eメールアドレス",

                EMAIL_PASSWORD_PASSWORD_LABEL: "パスワード",
                EMAIL_PASSWORD_PASSWORD_PLACEHOLDER: "パスワード",

                EMAIL_PASSWORD_SIGN_IN_HEADER_TITLE: "ログイン",
                EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_START:
                    "登録がまだの方はこちら",
                EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_SIGN_UP_LINK:
                    "新規ユーザー作成",
                EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_END: "",
                EMAIL_PASSWORD_SIGN_IN_FOOTER_FORGOT_PW_LINK:
                    "パスワードを忘れた方はこちら",
                EMAIL_PASSWORD_SIGN_IN_SUBMIT_BTN: "ログイン",
                EMAIL_PASSWORD_SIGN_IN_WRONG_CREDENTIALS_ERROR:
                    "メールアドレスとパスワードの組み合わせが正しくありません",

                EMAIL_PASSWORD_SIGN_UP_HEADER_TITLE: "新規ユーザー作成",
                EMAIL_PASSWORD_SIGN_UP_HEADER_SUBTITLE_START:
                    "すでにアカウントをお持ちの方",
                EMAIL_PASSWORD_SIGN_UP_HEADER_SUBTITLE_SIGN_IN_LINK: "ログイン",
                EMAIL_PASSWORD_SIGN_UP_HEADER_SUBTITLE_END: "",
                EMAIL_PASSWORD_SIGN_UP_FOOTER_START:
                    "継続することで、あなたは私たちの活動に同意することになります。",
                EMAIL_PASSWORD_SIGN_UP_FOOTER_TOS: "利用規約",
                EMAIL_PASSWORD_SIGN_UP_FOOTER_AND: "と",
                EMAIL_PASSWORD_SIGN_UP_FOOTER_PP: "プライバシーポリシー",
                EMAIL_PASSWORD_SIGN_UP_FOOTER_END: "",
                EMAIL_PASSWORD_SIGN_UP_SUBMIT_BTN: "新規ユーザー作成",

                EMAIL_PASSWORD_EMAIL_ALREADY_EXISTS:
                    "このメールはすでに存在しています。代わりにサインインしてください",

                EMAIL_PASSWORD_RESET_HEADER_TITLE: "パスワードの再設定",
                EMAIL_PASSWORD_RESET_HEADER_SUBTITLE:
                    "パスワードをリセットするためのメールを送信します",
                EMAIL_PASSWORD_RESET_SEND_SUCCESS:
                    "パスワード回復のためのリンクをメールでお知らせしますので、ご確認ください",
                EMAIL_PASSWORD_RESET_RESEND_LINK: "再送信",
                EMAIL_PASSWORD_RESET_SEND_BTN: "メールでのお問い合わせ",

                EMAIL_PASSWORD_RESET_SUBMIT_PW_SUCCESS_HEADER_TITLE: "成功!",
                EMAIL_PASSWORD_RESET_SUBMIT_PW_SUCCESS_DESC:
                    "パスワードは正常に更新されました",
                EMAIL_PASSWORD_RESET_SUBMIT_PW_SUCCESS_SIGN_IN_BTN: "ログイン",

                EMAIL_PASSWORD_NEW_PASSWORD_LABEL: "新規パスワード",
                EMAIL_PASSWORD_NEW_PASSWORD_PLACEHOLDER: "新規パスワード",
                EMAIL_PASSWORD_CONFIRM_PASSWORD_LABEL: "パスワードの確認",
                EMAIL_PASSWORD_CONFIRM_PASSWORD_PLACEHOLDER: "パスワードの確認",

                EMAIL_PASSWORD_RESET_SUBMIT_PW_HEADER_TITLE: "パスワードの変更",
                EMAIL_PASSWORD_RESET_SUBMIT_PW_HEADER_SUBTITLE:
                    "パスワードを変更するには、以下に新しいパスワードを入力してください。",
                EMAIL_PASSWORD_RESET_SUBMIT_PW_CHANGE_PW_BTN: "パスワード変更",
                EMAIL_PASSWORD_RESET_PASSWORD_INVALID_TOKEN_ERROR:
                    "パスワードリセットトークンが無効です",

                ERROR_EMAIL_NON_STRING: "電子メールは文字である必要があります",
                ERROR_EMAIL_INVALID: "無効な電子メールアドレスです",

                ERROR_PASSWORD_NON_STRING:
                    "パスワードは文字である必要があります",
                ERROR_PASSWORD_TOO_SHORT:
                    "パスワードは数字を含む8文字以上である必要があります",
                ERROR_PASSWORD_TOO_LONG:
                    "パスワードの長さは100文字以下でなければなりません",
                ERROR_PASSWORD_NO_ALPHA:
                    "パスワードには少なくとも1つのアルファベットが含まれている必要があります",
                ERROR_PASSWORD_NO_NUM:
                    "パスワードには少なくとも1つの数字が含まれている必要があります",
                ERROR_CONFIRM_PASSWORD_NO_MATCH:
                    "確認用パスワードが一致しません",

                ERROR_NON_OPTIONAL: "フィールドは必須です",

                EMAIL_VERIFICATION_SEND_TITLE: "メールを確認してください",

                EMAIL_VERIFICATION_RESEND_BTN: "メールを再送する",

                EMAIL_VERIFICATION_SEND_DESC_START: "",

                EMAIL_VERIFICATION_SEND_DESC_STRONG: "メールのリンクをクリックして登録を完了してください。",

                EMAIL_VERIFICATION_SEND_DESC_END: "",

                EMAIL_VERIFICATION_LOGOUT: "ログアウト",

                EMAIL_VERIFICATION_SUCCESS: "メールの確認が完了しました。",

                EMAIL_VERIFICATION_CONTINUE_BTN: "完了",

                EMAIL_VERIFICATION_EXPIRED: "メールの確認は完了しています。",

                EMAIL_VERIFICATION_CONTINUE_LINK: "戻る",

                /*
                 * 以下は、バックエンドSDKからのエラーメッセージです。
                 * これらは互換性を保つために完全なメッセージとして返されますが、上記のキーと同じように機能します。
                 * デフォルトではそのまま表示されます（undefinedに設定すると、生の翻訳キーが表示されます）。
                 */
                "This email already exists. Please sign in instead.":
                    "このメールはすでに存在しています。代わりにサインインしてください",
                "Field is not optional": "フィールドは必須です",
                "Password must contain at least 8 characters, including a number":
                    "パスワードは数字を含む8文字以上である必要があります",
                "Password's length must be lesser than 100 characters":
                    "パスワードの長さは100文字以下でなければなりません",
                "Password must contain at least one alphabet":
                    "パスワードには少なくとも1つのアルファベットが含まれている必要があります",
                "Password must contain at least one number":
                    "パスワードには少なくとも1つの数字が含まれている必要があります",
                "Email is invalid": "無効な電子メールアドレスです",
            },
        },
        defaultLanguage: "ja",
    },
    appInfo: {
        appName: process.env.REACT_APP_APP_NAME!,
        apiDomain: process.env.REACT_APP_API_DOMAIN!,
        websiteDomain: process.env.REACT_APP_WEB_SITE_DOMAIN!,
        apiBasePath: "/api",
        websiteBasePath: "/auth",
    },
    recipeList: [
        EmailPassword.init({
            useShadowDom: false,
            signInAndUpFeature: {
                signUpForm: {
                    formFields: [{
                        id: "email",
                        label: "Eメール",
                        validate: async (value: string) => {
                            // no error => undefined
                            const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
                            if (!regex.test(value)) {
                                return "無効な電子メールアドレスです。"
                            }
                            if (value.split("@")[1] !== "outlook.jp") {
                                return "許可されていないドメインのメールアドレスです。"
                            }
                            return undefined
                        }
                    }]
                }
            }
        }),
        EmailVerification.init({
            mode: "REQUIRED",
        }),
        Session.init(),
    ],
});

const App: React.FC = () => {
    return (
        <SuperTokensWrapper>
            <BrowserRouter>
                <Routes>
                    {/*This renders the login UI on the / route*/}
                    {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
                    {/*Your app routes*/}
                    <Route path="/" element={
                        <SessionAuth>
                            <Index />
                        </SessionAuth>
                    } />
                </Routes>
            </BrowserRouter>
        </SuperTokensWrapper>
    );
};

export default App;
