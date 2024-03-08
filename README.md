# 1. Clone the Repository
    git clone https://github.com/your-username/your-expo-app.git

# 2. Install Dependencies
    npm install -g expo-cli
    npm install
    npm add graphql-request graphql

# 3. Create a Hygraph CMS Account
- Create an account on Hygraph CMS

# 4. Create Schema in Hygraph CMS
- Add Schema: Note
- Add Field: Text

# 5. Update GlobalApi.js
- Change the URL in GlobalApi.js with your Hygraph CMS API access:
const MASTER_URL = "paste_your_api_access_here";

# 6. Public Content API
 Add the following permissions in your Hygraph CMS:

- Read
- Create
- Update
- Delete
- Publish
- Unpublish

### Happy Coding!
 You are now set up with your Expo CRUD-APP integrated with Hygraph CMS using GraphQL!
 Happy coding and feel free to customize and enhance your app.
 If you have any questions, refer to the Hygraph CMS documentation or reach out to their support.



  
