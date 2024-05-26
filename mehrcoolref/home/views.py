from django.shortcuts import render


# Create your views here.

from django.shortcuts import render
from django.views import View
import os

class HomeView(View):
    def get(self, request):
        image_dir = os.path.join('static', 'images', 'home')  # Adjust the path as needed
        images = os.listdir(image_dir)
        image_paths = [os.path.join('images', 'home', img) for img in images if img.endswith(('jpg', 'jpeg', 'png', 'gif'))]
        context = {'image_paths': image_paths}
        return render(request, 'home/home.html', context)