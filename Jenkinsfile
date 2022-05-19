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
            input(
            message: 'This is going to deploy to production', parameters: [
            [$class: 'BooleanParameterDefinition', defaultValue: false, description: '', name: 'Please confirm you accept the app for deployment']
        ])
        }
        stage('Deploy master branch') {
            steps {
                echo 'deploying to master'
                // sh 'docker-compose up -d --build'
            }
        }
    }
}

