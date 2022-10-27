# Generated by Django 4.1.2 on 2022-10-27 02:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('faculty', '0002_department'),
    ]

    operations = [
        migrations.CreateModel(
            name='Instructor',
            fields=[
                ('id', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('full_name', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100, unique=True)),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='faculty.faculty')),
            ],
        ),
    ]
