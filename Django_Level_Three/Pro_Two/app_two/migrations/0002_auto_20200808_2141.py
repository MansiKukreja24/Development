# Generated by Django 3.0.8 on 2020-08-08 16:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_two', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='Email',
            new_name='email',
        ),
    ]
