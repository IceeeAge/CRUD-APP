# Clone the Repository
git clone https://github.com/your-username/your-expo-app.git
cd your-expo-app

# Install Dependencies
npm install -g expo-cli
npm install
npm add graphql-request graphql

# 1. Create a Hygraph CMS Account
 - Create an account on Hygraph CMS



# 2. Create Schema in Hygraph CMS
    1. add Schema = Note 
    2. add Field = Text 

# 3. GlobalApi.js
     change the URL of your Hygraph CMS go to the setting hygraph cms copy the api acces
      const MASTER_URL = "past here your api acces";

# 4. Public Content API
     + Add permission
    Read,Create,Update,Delete,Publish,Unpublish

# Happy coding with your Expo CRUD-APP integrated with Hygraph CMS using GraphQL!

  
