# 🍽️ Recipe Finder

**Project Overview**  
Recipe Finder is a full-stack web application (frontend + backend) that allows users to search for recipes by ingredients or recipe name.  
The project is also set up for containerization and CI/CD using **Docker**, **Kubernetes**, and **Jenkins**, making it ready for production deployments.

------------------------------------------------------------------------

## 📌 Project Structure

    recipe-finder/
    │── backend/              # API & server logic
    │── frontend/             # React frontend served 
    │── .github/workflows/           # Helm chart for Kubernetes deployment
    │   ├── deploy.yml        # CI/CD with GitHub Action
    │── docker-compose.yml    # Local development setup
    │── README.md             # Project documentation
    │── Jenkinsfile           # jenkinsfile for CI/CD

------------------------------------------------------------------------

## 🧰 Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (latest LTS recommended)  
- npm or yarn  
- [Docker](https://www.docker.com/)  
- Kubernetes cluster (e.g., Minikube / kind for local deployment)  
- Jenkins (optional, for CI/CD)

------------------------------------------------------------------------

## 🛠️ Technologies Used

-   **Frontend:** React\
-   **Backend:** Node.js, Express\
-   **Containerization:** Docker, Docker Compose\
-   **Orchestration:** Kubernetes\
-   **CI/CD:** Jenkins And Github Action\

------------------------------------------------------------------------

## 🐳 Running with Docker Compose (Local)

``` bash
docker-compose up --build
```

------------------------------------------------------------------------

## ☸️ Deploying with Kubernetes 

  Check services:

    ``` bash
    kubectl apply -f k8s/
    ```
------------------------------------------------------------------------

## CI/CD with Jenkins 🛠️

A Jenkinsfile is included for building, testing, and deploying the application automatically.
You can integrate this repo with your Jenkins server to run the pipeline on every push.


------------------------------------------------------------------------

## 👤 Author

Developed by **Muhammad Essam**
