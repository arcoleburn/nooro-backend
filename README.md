# Hello There, Nooro! 

This is my backend repo for the fullstack take home test. 

## Let's get it Running 

### Step 1: Download MySQL
If you've got MySQL installed, great! Skip to [here](#step-2-setting-up-a-new-local-db).

If not, go [here](https://www.prisma.io/dataguide/mysql/setting-up-a-local-mysql-database) to find instructions on downloading and set up for your particular OS. I'll detail the instructions for Mac here, as thats what I've used 

[Mac MySQL Download Page](https://dev.mysql.com/downloads/mysql/)

After downloading, you'll need to edit your system's `PATH` env variable. 

Open a terminal and enter this command: `sudo nano /etc/paths`
(you will be prompted to enter an administrator password)

At the bottom of the file, add this line: `/usr/local/mysql/bin`

Then save and close by typing `CTL-X`, `Y`, and then `ENTER`.

If, like me, you're using `zsh`, you'll need to update your `.zshrc` file. Open it up, and put this line at the bottom, and save: 

`export PATH=${PATH}:/usr/local/mysql/bin/`

### Step 2. Setting up a new Local DB

1. **Login**
First, log into MySQL. In a fresh terminal window, run this command: `mysql -u root -p`. If you set up a password during installation, you'll have to enter it here. If there isn't a password, just hit `ENTER`.
 

2. **Create DB and (optionally) a new User** 
`CREATE DATABASE my_database_name` I used `nooro_todo` as mine, but make it whatever you want. 
It might make things a bit easier to have a new user too.
`CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';`
Then grant it privileges: 
`GRANT ALL PRIVILEGES ON my_database_name.* TO 'user'@'localhost';`
You'll also need some broader privileges to create/drop tables for Prisma migrations to work right:
`GRANT CREATE, DROP ON *.* to 'user'@'localhost';`
Apply those changes:
`FLUSH PRIVILEGES;` 

3. **Add .env file** 
Create an `.env` file at the root of your project.
Add this string: 
`DATABASE_URL="mysql://{USER}:{PASSWORD}@localhost:{PORT}/{DB_NAME}"` making sure to replace the apporpriate values.
Mine looked like this: `DATABASE_URL="mysql://user:password@localhost:3306/nooro_todo"`
4. **Run Prisma Migration**
I've added scripts to run the migrations. 
For an empty DB: `npm run resetDBNoSeed` 
For a seeded DB with mock tasks: `npm run resetDB`
5. **Open Prisma Studio**
Run `npx prisma studio` to see an interactive GUI of the database.


### Step 3: `npm run dev`

Run that command, and your backend should be up and running!