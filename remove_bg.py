from PIL import Image

def make_transparent(input_path, output_path):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # Check if the pixel is white (or very close to white)
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0)) # Make Transparent
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Successfully saved transparent logo to {output_path}")

try:
    make_transparent("/home/george/Documents/Project Neocambrian Garden/garden-app/public/spore_logo.png", "/home/george/Documents/Project Neocambrian Garden/garden-app/public/spore_logo_v2.png")
except Exception as e:
    print(f"Error: {e}")
