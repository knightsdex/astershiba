import re

path = "index.html"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

pattern = (
    r'        <div class="absolute inset-0 overflow-hidden pointer-events-none">\s*'
    r'(?:<div\s*\n\s*class="absolute rounded-full bg-white animate-twinkle"[\s\S]*?</div>\s*)+'
    r"        </div>\n"
)
new_content, count = re.subn(pattern, "", content)
print(f"Removed {count} twinkle overlay blocks")

with open(path, "w", encoding="utf-8", newline="\n") as f:
    f.write(new_content)
