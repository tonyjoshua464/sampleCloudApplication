# Sample Cloud Application

This repository contains a **sample cloud-native Java application** built with **Spring Boot** and **Maven**, containerized with **Docker**, and designed for deployment to cloud platforms (AWS, Kubernetes, etc.).  
It is integrated with CI/CD pipelines (via `buildspec.yml`) and can be easily run locally using **Docker Compose**.

---

## 🚀 Features

- Java **Spring Boot** web application
- Built using **Maven**
- Containerized with **Docker**
- Local deployment using **Docker Compose**
- CI/CD integration with **AWS CodeBuild** (`buildspec.yml`)
- Cloud-ready architecture

---
```
## 📂 Repository Structure

sampleCloudApplication/
│── .mvn/wrapper/ # Maven wrapper scripts
│── src/ # Application source code (Java, resources)
│── .dockerignore # Ignore rules for Docker builds
│── .gitignore # Ignore rules for Git
│── Dockerfile # Docker build instructions
│── README.md # Project documentation
│── buildspec.yml # AWS CodeBuild build instructions
│── compose.yaml # Docker Compose configuration
│── mvnw # Maven wrapper (Linux/Mac)
│── mvnw.cmd # Maven wrapper (Windows)
│── pom.xml # Maven project configuration

```

---

## ⚙️ Prerequisites

Before running the application, ensure you have:

- [Java 17+](https://adoptopenjdk.net/) installed
- [Maven](https://maven.apache.org/) (or use included Maven wrapper `./mvnw`)
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/) installed
- AWS CLI configured (for CI/CD via CodeBuild/CodePipeline)

---

## 🚀 Running the Application

### 1. Run Locally (without Docker)
```bash
# Using Maven wrapper
./mvnw spring-boot:run


or

# Using Maven installed globally
mvn spring-boot:run


Application will start at:
👉 http://localhost:8080
Build and Run with Docker
# Build Docker image
docker build -t sample-cloud-app .

# Run container
docker run -p 8080:8080 sample-cloud-app


Now open:
👉 http://localhost:8080

3. Run with Docker Compose
docker compose up --build


This will automatically build and start the application in a container.

🛠️ CI/CD Integration (AWS CodeBuild)

The buildspec.yml file defines the build and test pipeline for AWS CodeBuild.
Typical steps include:

Installing dependencies

Running Maven build & tests

Building Docker image

Pushing image to ECR (if integrated)

Deploying to ECS/EKS (if configured in pipeline)

📜 Maven Commands
# Clean and build project
./mvnw clean install

# Run tests
./mvnw test

# Package as JAR
./mvnw package

# Run application from JAR
java -jar target/*.jar




