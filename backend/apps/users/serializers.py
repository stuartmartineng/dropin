
# accounts/api/serializers.py

from django.contrib.auth import authenticate
from .models import User

from rest_framework import serializers
from rest_framework_jwt.settings import api_settings

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username','email', 'first_name', 'last_name', 'id')


class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('token', 'username', 'password', 'first_name', 'last_name', 'email')

# User._meta.get_field('email')._unique = True
# User._meta.get_field('username')._unique = True

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('id', 'username', 'email', 'first_name', 'last_name')


# class RegisterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('id', 'username', 'first_name', 'last_name', 'email', 'password')
#         extra_kwargs = {'password': {'write_only': True}}

#     def create(self, validated_data):
#         user = User.objects.create_user(
#             validated_data['username'],
#             validated_data['first_name'],
#             validated_data['last_name'],
#             validated_data['email'],
#             validated_data['password']
#         )
#         return user


# class LoginSerializer(serializers.Serializer):
#     username = serializers.CharField()
#     password = serializers.CharField()

#     def validate(self, data):
#         user = authenticate(**data)
#         if user and user.is_active:
#             return user
#         raise serializers.ValidationError("Incorrect Credentials")
