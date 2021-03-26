public class myFirstIntegration {
    public static void testCallOut(){
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        req.setHeader('Content-type', 'text/html');
        req.setEndpoint('https://myrestapi.requestcatcher.com/test');
        req.setMethod('POST');
        req.setBody('Good Morning');
        
        HttpResponse resp = h.send(req);
        system.debug('Response is' +resp);
        
    }
}