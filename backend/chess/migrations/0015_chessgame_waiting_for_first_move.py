# Generated by Django 4.2.5 on 2024-03-07 18:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chess', '0014_alter_chessgame_last_move'),
    ]

    operations = [
        migrations.AddField(
            model_name='chessgame',
            name='waiting_for_first_move',
            field=models.BooleanField(default=True),
        ),
    ]
