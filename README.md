# CRUD APP EXPO CLI HYGRAPH CMS AND GRAPQL REQUEST
# Demo Video
https://github.com/IceeeAge/CRUD-APP/assets/135114589/fbdf4407-42ec-4e0d-b5f0-d462a1d44e39

## 1. Clone this Repository
    git clone https://github.com/your-username/your-expo-app.git

# 2. Install Dependencies
    npm install -g expo-cli
    npm install
    npm add graphql-request graphql

## 3. Create a Hygraph CMS Account
- Create an account on Hygraph CMS
- Create New Project Name

# 4. Create Schema in Hygraph CMS
- Add Schema: Note
- Add Field: Text
![Schema](/assets/Images/schema.png)

## 5. Update GlobalApi.js
- Change the MASTER_URL in GlobalApi.js with your Hygraph CMS go to setting find API access: copy paste your Endpoints =>
- 
const MASTER_URL = "paste_your_api_access_here";

## 6. Public Content API
 Add the following permissions in your Hygraph CMS:

- Read
- Create
- Update
- Delete
- Publish
- Unpublish
![Permission](https://ap-northeast-1.graphassets.com/clu3u47nf045d08ya17mgg8u5/clu3vv8293flz07zlfctxelnr)


### Happy Coding!
 You are now set up with your Expo CRUD-APP integrated with Hygraph CMS using GraphQL!
 Happy coding and feel free to customize and enhance your app.
 If you have any questions, refer to the Hygraph CMS documentation or reach out to their support.






  
