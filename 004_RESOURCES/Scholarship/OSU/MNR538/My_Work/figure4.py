import matplotlib.pyplot as plt
import numpy as np

# Data from your Draft 2 Model
days = [0, 5, 10, 14]
control_conductance = [350, 190, 80, 20]  # Dropping rapidly
treated_conductance = [350, 280, 250, 210] # Maintained function

# Plot setup
plt.figure(figsize=(10, 6))
plt.plot(days, control_conductance, marker='o', linestyle='--', color='#d62728', label='Control (Untreated Soil)', linewidth=2.5, markersize=8)
plt.plot(days, treated_conductance, marker='o', linestyle='-', color='#2ca02c', label='Treated Soil (6-Pillar Protocol)', linewidth=2.5, markersize=8)

# Styling
plt.title('Modeled Tree Physiological Response: Stomatal Conductance\nQuercus fusiformis under Simulated Hotter Drought', fontsize=14, pad=20)
plt.xlabel('Day of Simulated Drought', fontsize=12)
# Replaced unicode superscripts with standard text to prevent font warnings
plt.ylabel('Stomatal Conductance (mmol m-2 s-1)', fontsize=12)
plt.ylim(0, 400)
plt.grid(True, linestyle=':', alpha=0.6)
plt.legend(fontsize=12)

# Annotations for clarity
plt.text(10.2, 85, 'Critical Stress Threshold', fontsize=10, color='#d62728', style='italic')
plt.axhline(y=80, color='gray', linestyle=':', alpha=0.5)

# Save
plt.tight_layout()
plt.savefig('figure4_stomatal_conductance.png', dpi=300)
