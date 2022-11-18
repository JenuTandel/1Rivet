/**
 * It indicates the status code of the API
 */
export enum Messages {
    /** For unauthorized error message */
    MessageForUnauthorizedUser = "You don't have permission to access the data for this page.",
    /** For internal server error message */
    MessageForInternalServerError = "Internal Server Error",
    /** message for token expired */
    MessageForUnauthorizedToken = 'Session Expired. Please login again.',
}

// export enum MessageTitles {
//     /** Susscess title for success toaster */
//     Success = 'Success!',
//     /** error title for error toaster */
//     Error = 'Error!',
//     /** warning title for warning toaster */
//     Warning = 'Warning!',
// }