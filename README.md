**E-Commerce API**

**Overview**  
This is a Node.js-based API for managing eCommerce operations, including product listings, orders, payments, and user authentication. Follow the instructions below to set up and run the API locally.

---

**Getting Started**

**Clone the Repository**  
Clone the repository to your local machine:

```bash
git clone <https://github.com/OLINYA-PAUL/Eshop-backend_application>


***Install Dependencies***

Navigate to the project directory and install the required dependencies:

`npm install`


# Server Configuration

# ensure to remove .example from config.example


PORT=8000

# Database
DB_URL=                # Your MongoDB connection string

# Authentication
JWT_SECRET_KEY="2FxXT1NTf2K1Mo4i6AOvtdI"
JWT_EXPIRES=7d
ACTIVATION_SECRET='PWj0fI#&DsZY9w$8tHe11*yr9F45K*j2xj&fceGZ!tEnMNZcEN'

# Email Configuration (Gmail)
SMPT_SERVICE=gmail
SMPT_HOST=smtp.gmail.com
SMPT_PORT=465
SMPT_PASSWORD=         # Your Gmail app password
SMPT_MAIL=            # Your Gmail address

# Payment Processing
STRIPE_API_KEY=       # Your Stripe publishable key
STRIPE_SECRET_KEY=    # Your Stripe secret key

# File Upload
CLOUDINARY_NAME=      # Your Cloudinary cloud name
CLOUDINARY_API_KEY=   # Your Cloudinary API key
CLOUDINARY_API_SECRET= # Your Cloudinary API secret

**Start the Application**

To start the application in development mode, run:

`npm run dev`
```
