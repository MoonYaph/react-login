import AsyncLoad from '../common/AsyncLoad';

export const AsyncHome = AsyncLoad({
  loader: () => import('../pages/HomePage'),

});
export const AsyncSignup = AsyncLoad({
  loader: () => import('../pages/SignupPage.js'),
});

export const AsyncLogin = AsyncLoad({
  loader: () => import('../pages/LoginPage.js')
})
export const AsyncConfirm = AsyncLoad({
  loader: () => import('../pages/ConfirmationPage.js')
})
export const AsyncForgetPassword = AsyncLoad({
  loader: () => import('../pages/ForgetPasswordPage.js')
})
export const AsyncResetPassword = AsyncLoad({
  loader: () => import('../pages/ResetPasswordPage.js')
})