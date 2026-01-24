from PIL import Image

def crop_text(input_path, output_path):
    img = Image.open(input_path)
    width, height = img.size
    
    # Crop the bottom 25% to remove the text
    # This is a heuristic based on the typical layout of the generated logo
    # The icon is usually centered in the top 75%
    display_area = (0, 0, width, int(height * 0.75))
    cropped_img = img.crop(display_area)
    
    # Now let's crop the transparent borders to make it tight
    bbox = cropped_img.getbbox()
    if bbox:
        cropped_img = cropped_img.crop(bbox)
        
    cropped_img.save(output_path, "PNG")
    print(f"Successfully cropped logo to {output_path}")

try:
    crop_text("/home/george/Documents/Project Neocambrian Garden/garden-app/public/spore_logo_v2.png", "/home/george/Documents/Project Neocambrian Garden/garden-app/public/spore_logo_v3.png")
except Exception as e:
    print(f"Error: {e}")
