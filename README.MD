# Mardens HR Website Setup and Usage

The Mardens HR website is available at [mardenshr.com](https://mardens-hr.com).

## Pre-Setup Requirements

- [Composer](https://getcomposer.org/)
- [PHP 8.2 or Greater](https://www.php.net/downloads.php)
- Recommended: [PHPStorm](https://www.jetbrains.com/phpstorm/) and [XAMPP](https://www.apachefriends.org/index.html)

## Setup Process

1. Clone Repository: Run the following command in your desired installation directory
    ```bash
    git clone https://github.com/Mardens-Inc/Mardens-HR.git --recurse
    ```
2. Install Composer Packages: Navigate to the project root and run:
    ```bash
    composer install
    ```
3. Configure Email: Create and modify the **_config.json_** file in the root directory with your smtp details:

    ```json
    {
       "host": "smtp.example.com",
       "port": 123,
       "auth": {
           "user": "user@example.com",
           "pass": ""
       }
   }
    ```

## Running the Website

You can use either XAMPP (recommended) or PHP's built-in server to run this project.

### Using XAMPP

1. Update the httpd.conf file with the following virtual host configuration:
    ```apacheconf
    <VirtualHost *:80>
    ServerName mardens-hr.local
    DocumentRoot "\path\to\Mardens HR"
    ErrorLog "\path\to\Mardens HR\error.log"
    
    <Directory "\path\to\Mardens HR">
        Options Indexes
        AllowOverride All
        Require all granted
    </Directory>
    </VirtualHost>
    ```
2. Add the following line to your hosts file:

   ```text
   127.0.0.1 mardens-hr.local
   ```

### Using PHP Server

Run the PHP server using the following command in your project root:

```bash 
php -S localhost:8000 # or any other port
```