pipeline {
    agent any

    stages {
        stage('Test the frontend develop branch') {
            steps {
                sh 'cd frontend && npm install && npm test -- --watchAll=false'
            }
        }
        stage('Deploy the develop branch') {
            steps {
                sh 'docker-compose up -d --build'
            }
        }
        
        stage('Acceptance Testing') {
            input('This is going o deploy to production ')
        }
        stage('Deploy master branch') {
            steps {
                echo 'deploying to master'
                // sh 'docker-compose up -d --build'
            }
        }
    }
}

