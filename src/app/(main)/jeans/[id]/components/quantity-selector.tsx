import { Minus, Plus } from "lucide-react";
import "./styles.css"

const QuantitySelector: React.FC<{
  quantity: number;
  onQuantityChange: (value: number) => void;
}> = ({ quantity, onQuantityChange }) => {
  const decrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const increase = () => {
    onQuantityChange(quantity + 1);
  };

  return (
    <div className="flex items-center border rounded-lg w-32 h-10">
      <button
        onClick={decrease}
        className="p-2 rounded-l-lg border-none group"
        disabled={quantity <= 1}>
        <Minus className="w-4 h-4 group-hover:text-jiniso animate-ease" />
      </button>
      <input
        type="number"
        value={quantity}
        onChange={(e) => onQuantityChange(parseInt(e.target.value) || 1)}
        className="w-full text-center py-1 focus:outline-none appearance-none hide-spin bg-transparent"
        min="1"
      />
      <button onClick={increase} className="p-2 rounded-r-lg border-none group">
        <Plus className="w-4 h-4 group-hover:text-jiniso animate-ease" />
      </button>
    </div>
  );
};

export default QuantitySelector;

