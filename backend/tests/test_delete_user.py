import pytest
from django.contrib.auth.models import User


@pytest.mark.filterwarnings
@pytest.mark.django_db
def test_user_create():
    u1 = User.objects.create_user('test', 'test@test.pl', 'test')
    u2 = User.objects.create_user('test1', 'test1@test.pl')
    print(u2)
    u1.delete()
    assert User.objects.count() == 1
