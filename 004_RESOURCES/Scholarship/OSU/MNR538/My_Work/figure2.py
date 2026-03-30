import matplotlib.pyplot as plt
import numpy as np

# Data
depths = ['0-10 cm', '10-20 cm', '20-30 cm']
pre_treatment = [0.02, 0.01, 0.005]
post_treatment = [0.10, 0.08, 0.04]

x = np.arange(len(depths))
width = 0.35

fig, ax = plt.subplots(figsize=(8, 6))
rects1 = ax.bar(x - width/2, pre_treatment, width, label='Pre-Treatment (Compacted)', color='#d62728', alpha=0.8)
rects2 = ax.bar(x + width/2, post_treatment, width, label='Post-Treatment (Decompacted + Biochar)', color='#2ca02c', alpha=0.8)

ax.set_ylabel('Hydraulic Conductivity (cm/hr)', fontsize=12)
ax.set_title('Modeled Improvement in Soil Hydraulic Conductivity\nAfter Phase 1 & 2 Interventions', fontsize=14, pad=20)
ax.set_xticks(x)
ax.set_xticklabels(depths, fontsize=11)
ax.legend(fontsize=11)
ax.grid(axis='y', linestyle=':', alpha=0.5)

# Add text labels
for i in range(len(depths)):
    fold = post_treatment[i] / pre_treatment[i]
    ax.text(i, post_treatment[i] + 0.002, f'{fold:.0f}x Increase', ha='center', va='bottom', fontsize=10, fontweight='bold')

plt.tight_layout()
plt.savefig('figure2_hydraulic_conductivity.png', dpi=300)
print("Figure 2 saved as figure2_hydraulic_conductivity.png")
