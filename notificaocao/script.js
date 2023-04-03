function showNotifications(){

     if( !("Notification" in window)){
          console.log("navegador nao suporta;")
     }else if(Notification.permission == "granted"){
          const notify = new Notification("ola, bem vindo(a) de volta !")
     }else if( Notification.permission !== "denied"){
          Notification.requestPermission( function(permission){
               if(permission === 'granted'){
                    const notify = new Notification("ola bem vindo(a)")
               }
          })
     }
}