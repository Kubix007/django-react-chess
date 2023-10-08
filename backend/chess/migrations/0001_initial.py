# Generated by Django 4.2.5 on 2023-10-08 20:50

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ChessGame',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('player_black', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='black_player', related_query_name='black_player', to=settings.AUTH_USER_MODEL)),
                ('player_white', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='white_player', related_query_name='white_player', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='WhitePieces',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pawn_1', models.JSONField()),
                ('pawn_2', models.JSONField()),
                ('pawn_3', models.JSONField()),
                ('pawn_4', models.JSONField()),
                ('pawn_5', models.JSONField()),
                ('pawn_6', models.JSONField()),
                ('pawn_7', models.JSONField()),
                ('pawn_8', models.JSONField()),
                ('rook_1', models.JSONField()),
                ('rook_2', models.JSONField()),
                ('bishop_1', models.JSONField()),
                ('bishop_2', models.JSONField()),
                ('knight_1', models.JSONField()),
                ('knight_2', models.JSONField()),
                ('queen', models.JSONField()),
                ('king', models.JSONField()),
                ('game_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='chess.chessgame')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='BlackPieces',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pawn_1', models.JSONField()),
                ('pawn_2', models.JSONField()),
                ('pawn_3', models.JSONField()),
                ('pawn_4', models.JSONField()),
                ('pawn_5', models.JSONField()),
                ('pawn_6', models.JSONField()),
                ('pawn_7', models.JSONField()),
                ('pawn_8', models.JSONField()),
                ('rook_1', models.JSONField()),
                ('rook_2', models.JSONField()),
                ('bishop_1', models.JSONField()),
                ('bishop_2', models.JSONField()),
                ('knight_1', models.JSONField()),
                ('knight_2', models.JSONField()),
                ('queen', models.JSONField()),
                ('king', models.JSONField()),
                ('game_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='chess.chessgame')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
