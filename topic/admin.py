from django.contrib import admin
from .models import Topic, Tag, Link

admin.site.register(Tag)
admin.site.register(Topic)
admin.site.register(Link)