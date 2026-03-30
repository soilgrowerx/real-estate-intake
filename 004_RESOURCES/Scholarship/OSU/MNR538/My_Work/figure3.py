import matplotlib.pyplot as plt
import numpy as np

# Synthetic Data for Heat Map
np.random.seed(42)
x = np.linspace(0, 10, 100)
y = np.linspace(0, 10, 100)
X, Y = np.meshgrid(x, y)
z = np.exp(-((X-3)**2 + (Y-3)**2)/3) + np.exp(-((X-7)**2 + (Y-7)**2)/4)

fig, ax = plt.subplots(figsize=(8, 8))
contour = ax.contourf(X, Y, z, levels=10, cmap='RdYlGn_r', alpha=0.6)
cbar = fig.colorbar(contour, ax=ax, shrink=0.8)
cbar.set_label('Composite Vulnerability Index (Heat + Canopy Loss)', rotation=270, labelpad=20)

# Priority Zones
priority_zones = [(3, 3), (7, 7)]
for px, py in priority_zones:
    circle = plt.Circle((px, py), 1.2, color='black', fill=False, linewidth=2.5, linestyle='--')
    ax.add_artist(circle)
    ax.text(px, py+1.5, 'Priority Zone', ha='center', fontsize=10, fontweight='bold')

ax.set_title('GIS Analysis: Priority Intervention Zones\n(Representative Output of Suitability Model)', fontsize=14, pad=15)
ax.set_xlabel('Longitude (Relative)', fontsize=10)
ax.set_ylabel('Latitude (Relative)', fontsize=10)
ax.grid(True, linestyle=':', alpha=0.3)

# Fake roads for context
ax.plot([0, 10], [2, 8], color='gray', linewidth=1, alpha=0.5)
ax.plot([2, 8], [0, 10], color='gray', linewidth=1, alpha=0.5)
ax.text(1, 2.2, 'Main St.', color='gray', rotation=30, fontsize=8)

plt.tight_layout()
plt.savefig('figure3_priority_zones.png', dpi=300)
print("Figure 3 saved as figure3_priority_zones.png")
