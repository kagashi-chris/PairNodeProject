const request=require('request');

module.exports=function(splitCommand){

    if (splitCommand[0]==='curl'){
        request(splitCommand[1], function (error, response, body) {

            if (error) throw error
            else{
                process.stdout.write(body);
            }

});
}


}