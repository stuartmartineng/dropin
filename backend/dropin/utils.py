from users.serializers import UserSerializer
import logging

def my_jwt_response_handler(token, user=None, request=None):
    print(token)
    logger = logging.getLogger("myLogger")
    logger.info("Simple info")
    return {
        'token': token,
        'user': UserSerializer(user, context={'request': request}).data
    }