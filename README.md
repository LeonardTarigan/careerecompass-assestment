## Getting Started

1. Clone the repository:
    ```
    git clone https://github.com/LeonardTarigan/dialink.git
    ```

2. Navigate into the project directory:
    ```
    cd ./dialink
    ```

3. Install dependencies:
    ```
    pnpm install
    ```

## Database Setup
1. Deploy the project to [Vercel](https://vercel.com/)
2. Once deployed, go to the project dashboard, navigate to **Storage** tab and create a new Postgres database
3. Install Vercel CLI
   ```
   npm i -g vercel@latest
   ```
4. Link the project to Vercel
   ```
   vercel link
   ```
   You will be asked a few questions regarding the project setup
   ```
   ? Set up "./local_project_path"? [Y/n] y
   ? Which scope should contain your project? <vercel_account_username>
   ? Link to existing project? [y/N] y
   ? What's the name of your existing project? <deployed_project_name_on_vercel>
   ```
6. Pull the `.env` file
   ```
   vercel env pull .env
   ```
7. Migrate the database schema
   ```
   npx prisma db push
   ```
8. Run the project
   ```
   pnpm run dev
   ```

Notes: 
- For better instruction on the database setup, watch the tutorial [here](https://www.youtube.com/watch?v=GxUR4zIasB8&t=2283s)
- To open the database editor, run `npx prisma studio`
