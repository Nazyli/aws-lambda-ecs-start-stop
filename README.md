# Start/Stop ECS Fargate Tasks using AWS Lambda

## Usage
AWS Identity and Access

IAM policy to enable the Lambda function to update the ECS service
```json
{
      "Version": "2012-10-17",
      "Statement": [
          {
              "Effect": "Allow",
              "Action": "ecs:UpdateService",
              "Resource": "*"
          }
      ]
 }
```

## Input Event

```json
[
  {
    "status": "stop",
    "ecs_cluster": "ecs_cluster_1",
    "ecs_service_name": "ecs_service_name_1"
  },
  {
    "status": "stop",
    "ecs_cluster": "ecs_cluster_2",
    "ecs_service_name": "ecs_service_name_3"
  },
  {
    "status": "stop",
    "ecs_cluster": "ecs_cluster_3",
    "ecs_service_name": "ecs_service_name_3"
  }
]
```
## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

## License

[MIT](https://choosealicense.com/licenses/mit/)