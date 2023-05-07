from django import template
from django.conf import settings
import os
import glob
import re

register = template.Library()


@register.filter
def get_static_file(type):
    static_root = os.path.join(settings.FRONTEND_DIR, 'static')
    js_file = glob.glob(os.path.join(static_root, 'js', f'main.*.js'))[0]
    css_file = glob.glob(os.path.join(static_root, 'css', f'main.*.css'))[0]
    
    if type == 'js':
        return re.sub(r'.*static', '/static', js_file)
    elif type == 'css':
        return re.sub(r'.*static', '/static', css_file)
    else:
        return ''