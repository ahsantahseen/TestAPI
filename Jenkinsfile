pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
    stage('Removing Old Builds'){
        steps{
            sh 'rm -rf TestAPI'
        }
    }
    stage('Git') {
      steps {
        sh 'git clone https://github.com/ahsantahseen/TestAPI.git'
      }
    }
    stage('Changing to Project Directory'){
        steps{
            sh 'cd TestAPI'
        }
    }
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }        
    stage('Run') {
      steps {
        sh 'pm2 start index.js'
      }
    }
  }
}