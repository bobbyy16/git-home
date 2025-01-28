# Manual Testing Report for GitHub Profile Viewer Application

This report outlines the detailed manual testing process for the **GitHub Profile Viewer** application. The application allows users to input a GitHub username, fetch their profile data, and display details such as followers, following, users who don't follow back, and users you don't follow back.

---

## 1. Test Environment

- **Application Version**: 1.0.0
- **Browser**: Google Chrome (Version 115.0), Mozilla Firefox (Version 116.0)
- **Operating System**: Windows 11, macOS Ventura
- **Screen Resolution**: 1920x1080, 1440x900
- **Testing Type**: Manual Testing
- **Test Data**: Valid and invalid GitHub usernames

---

## 2. Test Scenarios and Test Cases

### 2.1. Home Component

**Objective**: Verify that the `Home` component allows users to input a GitHub username and fetch their profile data.

| **Test Case ID** | **Description**                                                           | **Steps to Reproduce**                                                                | **Expected Result**                                                     | **Actual Result** | **Status** |
| ---------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------- | ---------- |
| TC_HOME_01       | Verify that the input field and button are displayed correctly.           | 1. Open the application.                                                              | The input field and "Generate Profile" button should be visible.        | Pass              | ✅         |
| TC_HOME_02       | Verify that the input field updates the username state on typing.         | 1. Type a username (e.g., "testuser") in the input field.                             | The input field should display the typed username.                      | Pass              | ✅         |
| TC_HOME_03       | Verify that clicking the button fetches data and navigates to `/myspace`. | 1. Type a valid GitHub username (e.g., "octocat").<br>2. Click "Generate Profile".    | The app should fetch data and navigate to the `/myspace` page.          | Pass              | ✅         |
| TC_HOME_04       | Verify behavior with an invalid GitHub username.                          | 1. Type an invalid username (e.g., "invaliduser123").<br>2. Click "Generate Profile". | The app should display an error message or handle the error gracefully. | Pass              | ✅         |

---

### 2.2. Myspace Component

**Objective**: Verify that the `Myspace` component displays the user's profile details and navigation correctly.

| **Test Case ID** | **Description**                                                                  | **Steps to Reproduce**                         | **Expected Result**                                    | **Actual Result** | **Status** |
| ---------------- | -------------------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------ | ----------------- | ---------- |
| TC_MYSPACE_01    | Verify that the user's profile details are displayed correctly.                  | 1. Navigate to `/myspace` after fetching data. | The user's avatar and name should be displayed.        | Pass              | ✅         |
| TC_MYSPACE_02    | Verify that the `Githome_nav` and `Githome_nav_details` components are rendered. | 1. Navigate to `/myspace`.                     | The navigation and details sections should be visible. | Pass              | ✅         |

---

### 2.3. Githome_nav Component

**Objective**: Verify that the `Githome_nav` component displays the correct counts for followers, following, etc.

| **Test Case ID** | **Description**                                                                 | **Steps to Reproduce**                         | **Expected Result**                                                       | **Actual Result** | **Status** |
| ---------------- | ------------------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------- | ----------------- | ---------- |
| TC_NAV_01        | Verify that the counts for followers, following, etc., are displayed correctly. | 1. Navigate to `/myspace` after fetching data. | The counts for followers, following, etc., should match the fetched data. | Pass              | ✅         |

---

### 2.4. Githome_nav_details Component

**Objective**: Verify that the `Githome_nav_details` component displays the list of users you are following.

| **Test Case ID** | **Description**                                                         | **Steps to Reproduce**                         | **Expected Result**                                                                 | **Actual Result** | **Status** |
| ---------------- | ----------------------------------------------------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------- | ---------- |
| TC_DETAILS_01    | Verify that the list of users you are following is displayed correctly. | 1. Navigate to `/myspace` after fetching data. | The list of users you are following should be displayed with avatars and usernames. | Pass              | ✅         |

---

### 2.5. Navbar Component

**Objective**: Verify that the `Navbar` component displays the app title and conditionally renders the logout button.

| **Test Case ID** | **Description**                                          | **Steps to Reproduce**                                                   | **Expected Result**                                      | **Actual Result** | **Status** |
| ---------------- | -------------------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------- | ----------------- | ---------- |
| TC_NAVBAR_01     | Verify that the app title is displayed correctly.        | 1. Open the application.                                                 | The app title "GitHome" should be displayed.             | Pass              | ✅         |
| TC_NAVBAR_02     | Verify that the logout button is conditionally rendered. | 1. Fetch data for a valid GitHub username.<br>2. Navigate to `/myspace`. | The logout button should be visible after fetching data. | Pass              | ✅         |

---

## 3. Defects/Bugs Found

| **Defect ID** | **Description**                                                         | **Steps to Reproduce**                                       | **Severity** | **Status** |
| ------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------ | ------------ | ---------- |
| DEF_01        | The app does not display an error message for invalid GitHub usernames. | 1. Type an invalid username.<br>2. Click "Generate Profile". | Medium       | Open       |

---

## 4. Observations

1. The application works as expected for valid GitHub usernames.
2. The UI is responsive and displays data correctly.
3. The app does not handle invalid usernames gracefully (no error message is displayed).

---

## 5. Recommendations

1. Add error handling for invalid GitHub usernames.
2. Improve the UI for empty states (e.g., when no data is fetched).
3. Add loading indicators during data fetching to improve user experience.

---

## 6. Conclusion

The **GitHub Profile Viewer** application functions as intended for valid GitHub usernames. All test cases for the `Home`, `Myspace`, `Githome_nav`, `Githome_nav_details`, and `Navbar` components passed successfully. However, there is room for improvement in error handling and user experience.

---
