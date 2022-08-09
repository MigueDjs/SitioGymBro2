self.addEventListener('fetch', event => {

    if( event.request.url.includes('tooplate-gymso-style.css')){
        event.respondWith( null );
    }else{
        event.respondWith( fetch( event.request ) );
    }

    
});