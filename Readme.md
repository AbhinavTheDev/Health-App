

## Set Up the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/Health-App.git
   ```

2. **Navigate to the backend**:
   ```bash
   cd Health-App
   cd backend
   ```

3. **Create and Activate a Virtual Environment**:
   - Create a virtual environment:
     ```bash
     python -m venv env
     ```
   - Activate it:
     - **Windows**:
       ```cmd
       .\env\Scripts\activate
       ```
     - **Linux/Mac**:
       ```bash
       source env/bin/activate
       ```

4. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

5. **Create .env file in your backend**:
   ```bash
   # backend/.env

   GEMINI_API_KEY= your gemini api key
   ```
   you can generate your api key from [AI Studio Google](https://aistudio.google.com/app/apikey)
  

6. **Run the Backend**:
   You can now run your project using the command specified in your project documentation, such as:
   ```bash
   python app.py
   ```
### Now Run Frontend

1. **Navigate to the frontend**:
   ```bash
   cd ../frontend
   ```
2. **Installing Lib**:
   ```bash
   npm i
   ```
3. **run the frontend**:
   ```bash
   npm run dev
   ```