pipeline {
    agent any
    triggers {
       githubPush()
    }

    stages {
        stage('Git'){
            steps{
                git 'https://github.com/ahsantahseen/TestAPI.git'
            }
        }
        stage('Build'){
            steps{
                sh 'npm install'
            }
        }
        stage('Run'){
            steps{
                sh 'node index.js'
            }
        }
    }
    post{
        success {
            mail to: "ahsan.tntboy@gmail.com",
            subject: "Build Notification",
            body: "Development Build Successful"
        }
        failure {
            mail to: "ahsan.tntboy@gmail.com",
            subject: "Build Notification",
            body: "Build Failed"
        }
    }
}
