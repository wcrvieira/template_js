// Função que verifica o login
function verificar() {
    let nome = document.login.nome.value;
    let senha = document.login.senha.value;

   switch (senha) {
        case "AOliveira151":
            location.href = 'exec/lista1.html';
            break;
        case "AMaximino151":
            location.href = 'exec/lista2.html';
            break;
        case "AAguiar151":
            location.href = 'exec/lista3.html';
            break;            
        case "BSilva151":
            location.href = 'exec/lista1.html';
            break; 
        case "BMoreira151":
            location.href = 'exec/lista2.html';
            break;
        case "CSomer151":
            location.href = 'exec/lista3.html';
            break;  
        case "CGomes151":
            location.href = 'exec/lista1.html';
            break;
        case "CEvangelista":
            location.href = 'exec/lista1.html';
            break;
        case "CPuliani151":
            location.href = 'exec/lista2.html';
            break;
        case "CSavoldi151":
            location.href = 'exec/lista3.html';
            break;            
        case "ELucrecio151":
            location.href = 'exec/lista1.html';
            break; 
        case "FCosta151":
            location.href = 'exec/lista2.html';
            break;
        case "FSouza151":
            location.href = 'exec/lista3.html';
            break;   
        case "GRodrigues151":
            location.href = 'exec/lista1.html';
            break;
        case "GCustodio151":
            location.href = 'exec/lista2.html';
            break;
        case "GFernandes151":
            location.href = 'exec/lista3.html';
            break;            
        case "HBarbosa151":
            location.href = 'exec/lista1.html';
            break; 
        case "ISilva151":
            location.href = 'exec/lista2.html';
            break;
        case "IGuessi151":
            location.href = 'exec/lista3.html';
            break;  
        case "JNunes151":
            location.href = 'exec/lista1.html';
            break;
        case "JFavaro151":
            location.href = 'exec/lista2.html';
            break;
        case "JSantos151":
            location.href = 'exec/lista3.html';
            break;            
        case "JSpera151":
            location.href = 'exec/lista1.html';
            break; 
        case "JSpinda151":
            location.href = 'exec/lista2.html';
            break;
        case "JSorrente151":
            location.href = 'exec/lista3.html';
            break;      
        case "KConti151":
            location.href = 'exec/lista1.html';
            break;            
        case "LFrancisco151":
            location.href = 'exec/lista2.html';
            break; 
        case "LSilva151":
            location.href = 'exec/lista3.html';
            break;
        case "LCruz151":
            location.href = 'exec/lista1.html';
            break;  
        case "LBento151":
            location.href = 'exec/lista2.html';
            break;
        case "LMaximo151":
            location.href = 'exec/lista3.html';
            break;
        case "LSilva151":
            location.href = 'exec/lista1.html';
            break;            
        case "MAraujo151":
            location.href = 'exec/lista2.html';
            break; 
        case "PNogueira151":
            location.href = 'exec/lista3.html';
            break;
        case "PDias151":
            location.href = 'exec/lista1.html';
            break;  
        case "PDezem151":
            location.href = 'exec/lista2.html';
            break;            
        case "RNascimento151":
            location.href = 'exec/lista3.html';
            break; 
        case "RMoraes151":
            location.href = 'exec/lista1.html';
            break;
        case "RBernarde151":
            location.href = 'exec/lista2.html';
            break;  
        case "VGuedes151":
            location.href = 'exec/lista3.html';
            break;
        case "Wvieira151":
            location.href = 'exec/lista.html';
            break;        
        default:
            alert('Senha incorreta');
            document.login.senha.value = "";            
   }
}


