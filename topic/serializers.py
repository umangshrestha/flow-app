from rest_framework import serializers
from .models import Tag, Topic, Link



class LinkSerializer(serializers.ModelSerializer):

    class Meta:
        model = Link
        fields = "__all__"

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep["topic"] = instance.topic.topic
        return rep



class TopicSerializer(serializers.ModelSerializer):

    class Meta:
        model = Topic
        fields = ("id", "topic")

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        return rep


class TagSerializer(serializers.ModelSerializer):
    topic = TopicSerializer(source='topic_set', many=True)

    class Meta:
        model = Tag
        fields = ("id", "tag", 'topic')
    
  
