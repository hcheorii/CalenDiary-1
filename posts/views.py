from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse, JsonResponse

def url_view(request):
    print('url_view()')
    data = {'code': '001', 'msg': 'OK'}
    return HttpResponse('<h1>url_view</h1>')
    #return JsonResponse(data)

def url_parameter_view(request, username):
    print('url_parameter_view()')
    print(f'username: {username}')
    print(f'request.GET:{request.GET}')
    return HttpResponse(username)

#@login_required
def post_create_view(request):
    if request.method == 'GET':
        return render(request, 'posts/post_form.html')
    else:
        image = request.FILES.get('image')
        content = request.POST.get('content')
        print(image)
        print(content)
        Post.objects.create(
            image=image,
            content=content,
            author=request.user
        )
        return redirect('index')
    
def post_form_view(request):
    if request.method == 'GET':
        return render(request, 'posts/post_form.html')
    else:
        Post.objects.create(
            image=image,
            content=content,
            author=request.user
        )
        return redirect('index')


