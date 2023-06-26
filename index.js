const aws = require("aws-sdk");
exports.handler = (event, context) => {
  var ecsRegion = "ap-southeast-3";
  for (let i = 0; i < event.length; i++) {
    let obj = event[i];
    console.log(JSON.stringify(obj));
    // stop all taks
    if (obj.status == "stop") {
      var params = {
        cluster: obj.ecs_cluster,
        service: obj.ecs_service_name,
        desiredCount: 0,
      };
    } else {
      // otherwise : start one task
      var params = {
        cluster: obj.ecs_cluster,
        service: obj.ecs_service_name,
        desiredCount: 1,
      };
    }
    var ecs = new aws.ECS({ region: ecsRegion });
    ecs.updateService(params, function (err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else {
        context.succeed();
      }
    });
  }
};