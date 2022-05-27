/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_test",
        protectedApi: "B2C_1A_MFA_IP_TIMEOUT_SUSI",
        editProfile: "B2C_1A_PROFILEEDIT"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://mikeyosoft.b2clogin.com/mikeyosoft.onmicrosoft.com/B2C_1_test",
        },
        protectedApi: {
            authority: "https://mikeyosoft.b2clogin.com/mikeyosoft.onmicrosoft.com/B2C_1A_MFA_IP_TIMEOUT_SUSI",
        },
        editProfile: {
            authority: "https://mikeyosoft.b2clogin.com/mikeyosoft.onmicrosoft.com/B2C_1A_PROFILEEDIT"
        }
    },
    authorityDomain: "mikeyosoft.b2clogin.com"
}