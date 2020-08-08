from django.shortcuts import render
from django.http import HttpResponse
from app_two.forms import FormName


# Create your views here.

def index(request):
    return render(request,'app_two/index.html')

def users(request):
    form = FormName()
    if request.method == "POST":
        form = FormName(request.POST)

        if form.is_valid():
            form.save(commit=True)
            return index(request)
        else:
            print("ERROR FORM INVALID")

    return render(request, 'app_two/form_page.html', {'form': form})
