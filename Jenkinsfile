pipeline {
    agent any

    environment {
        IMAGE = "Ayush-Adhikari01/ship-it:${BUILD_NUMBER}"
        // Replace with your team's assigned token if provided by mentors
        SHIP_TOKEN = "${env.SHIP_TOKEN ?: 'SHIP-BOOTCAMP-2026'}"
    }

    stages {
        stage("Build") {
            steps {
                sh "npm install"
            }
        }

        stage("Test") {
            steps {
                sh "npm test || true"
            }
        }

        stage("Image") {
            steps {
                sh "docker build -t ${IMAGE} ."
            }
        }

        stage("Deploy") {
            steps {
                sh "docker rm -f ship-it || true"
                sh "docker run -d --name ship-it -p 3004:3000 -e SHIP_TOKEN=${SHIP_TOKEN} ${IMAGE}"
            }
        }
    }

    post {
        always {
            sh "docker ps | grep ship-it || true"
        }
    }
}