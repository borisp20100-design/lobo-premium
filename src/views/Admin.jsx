import React from 'react';
import { Package, Plus, Trash2, Edit, Save, Download, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react';

export default function Admin({ products, setProducts, setView }) {
  const [activeTab, setActiveTab] = React.useState('list'); // 'list' | 'add' | 'edit'
  const [editingProduct, setEditingProduct] = React.useState(null);
  const [statusMessage, setStatusMessage] = React.useState(null);

  // Form State
  const [formData, setFormData] = React.useState({
    name: '',
    tagline: '',
    description: '',
    price: '',
    originalPrice: '',
    images: '',
    videoUrl: '',
    tags: '',
    specs: ''
  });

  const resetForm = () => {
    setFormData({
      name: '',
      tagline: '',
      description: '',
      price: '',
      originalPrice: '',
      images: '',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      tags: 'Nuevo',
      specs: 'Material: Premium\nGarantía: 12 meses'
    });
    setEditingProduct(null);
  };

  const parseSpecs = (specsStr) => {
    const specsObj = {};
    specsStr.split('\n').forEach(line => {
      const parts = line.split(':');
      if (parts.length >= 2) {
        specsObj[parts[0].trim()] = parts.slice(1).join(':').trim();
      }
    });
    return specsObj;
  };

  const stringifySpecs = (specsObj) => {
    return Object.entries(specsObj)
      .map(([key, val]) => `${key}: ${val}`)
      .join('\n');
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: `lobo-custom-${Date.now()}`,
      name: formData.name,
      tagline: formData.tagline,
      description: formData.description,
      price: parseFloat(formData.price),
      originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
      images: formData.images.split('\n').filter(url => url.trim() !== ''),
      videoUrl: formData.videoUrl,
      variants: {
        colors: [
          { name: "Estándar", value: "#2A2A2A" }
        ],
        sizes: ["Estándar"]
      },
      specs: parseSpecs(formData.specs),
      reviews: [],
      rating: 5.0,
      reviewsCount: 0,
      tags: formData.tags.split(',').map(t => t.trim())
    };

    setProducts([newProduct, ...products]);
    showStatus("Producto agregado exitosamente.");
    setActiveTab('list');
    resetForm();
  };

  const handleStartEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      tagline: product.tagline,
      description: product.description,
      price: product.price,
      originalPrice: product.originalPrice || '',
      images: product.images.join('\n'),
      videoUrl: product.videoUrl || '',
      tags: product.tags.join(', '),
      specs: stringifySpecs(product.specs)
    });
    setActiveTab('edit');
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    setProducts(prevProducts => prevProducts.map(p => {
      if (p.id === editingProduct.id) {
        return {
          ...p,
          name: formData.name,
          tagline: formData.tagline,
          description: formData.description,
          price: parseFloat(formData.price),
          originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
          images: formData.images.split('\n').filter(url => url.trim() !== ''),
          videoUrl: formData.videoUrl,
          tags: formData.tags.split(',').map(t => t.trim()),
          specs: parseSpecs(formData.specs)
        };
      }
      return p;
    }));

    showStatus("Producto actualizado exitosamente.");
    setActiveTab('list');
    resetForm();
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      setProducts(prevProducts => prevProducts.filter(p => p.id !== productId));
      showStatus("Producto eliminado.");
    }
  };

  const showStatus = (msg) => {
    setStatusMessage(msg);
    setTimeout(() => setStatusMessage(null), 3000);
  };

  const handleExportDatabase = () => {
    const fileContent = `export const products = ${JSON.stringify(products, null, 2)};\n`;
    const blob = new Blob([fileContent], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'products.js';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-left space-y-8">
      {/* Back Button */}
      <button 
        onClick={() => setView('home')}
        className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
      >
        <ArrowLeft className="w-4 h-4" /> Volver al Inicio
      </button>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-5">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-2">
            Panel de Administración
          </h1>
          <p className="text-sm text-gray-400 mt-1">Administra tus productos y reseñas visualmente sin escribir código.</p>
        </div>
        
        {/* Export / Download database button */}
        <button
          onClick={handleExportDatabase}
          className="flex items-center justify-center gap-2 px-5 py-3 bg-premium-gold text-premium-dark font-extrabold text-xs rounded-xl hover:bg-white transition-all duration-200"
          title="Descarga el archivo products.js actualizado para publicarlo de forma permanente"
        >
          <Download className="w-4 h-4" /> Exportar Base de Datos
        </button>
      </div>

      {statusMessage && (
        <div className="bg-green-600/10 border border-green-600/20 text-green-400 p-4 rounded-xl flex items-center gap-3 text-xs sm:text-sm animate-fade-in">
          <CheckCircle className="w-5 h-5 shrink-0" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Tabs Menu */}
      <div className="flex gap-4 border-b border-white/5 pb-3">
        <button
          onClick={() => { setActiveTab('list'); resetForm(); }}
          className={`pb-2.5 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${
            activeTab === 'list' ? 'border-premium-gold text-premium-gold' : 'border-transparent text-gray-400 hover:text-white'
          }`}
        >
          Listado de Productos
        </button>
        <button
          onClick={() => { setActiveTab('add'); resetForm(); }}
          className={`pb-2.5 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${
            activeTab === 'add' ? 'border-premium-gold text-premium-gold' : 'border-transparent text-gray-400 hover:text-white'
          }`}
        >
          Agregar Producto
        </button>
        {activeTab === 'edit' && (
          <span className="pb-2.5 text-xs font-bold uppercase tracking-wider border-b-2 border-premium-gold text-premium-gold">
            Editando: {editingProduct?.name}
          </span>
        )}
      </div>

      {/* List Tab */}
      {activeTab === 'list' && (
        <div className="border border-white/5 rounded-2xl overflow-hidden bg-premium-lightDark/30 divide-y divide-white/5">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 gap-4">
              <div className="flex items-center gap-4 text-left">
                <div className="w-14 h-14 bg-premium-dark rounded-lg overflow-hidden shrink-0 border border-white/5">
                  <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm sm:text-base">{product.name}</h3>
                  <p className="text-xs text-gray-400 font-medium">${product.price.toFixed(2)}</p>
                  <p className="text-[10px] text-gray-500 mt-1">Tags: {product.tags.join(', ')}</p>
                </div>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  onClick={() => handleStartEdit(product)}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-bold rounded-lg border border-white/5 transition-colors"
                >
                  <Edit className="w-3.5 h-3.5" /> Editar
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 bg-red-600/10 hover:bg-red-600/20 text-red-400 text-xs font-bold rounded-lg border border-red-600/20 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add / Edit Form Tab */}
      {(activeTab === 'add' || activeTab === 'edit') && (
        <form onSubmit={activeTab === 'add' ? handleAddProduct : handleSaveEdit} className="bg-premium-lightDark/50 border border-white/5 rounded-2xl p-6 md:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Title / Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Nombre del Producto</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Ej. Audífonos Lobo Sound Premium"
                className="w-full bg-premium-dark border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white outline-none focus:border-premium-gold transition-colors"
              />
            </div>

            {/* Tagline */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Tagline (Eslogan corto)</label>
              <input
                type="text"
                required
                value={formData.tagline}
                onChange={(e) => setFormData({...formData, tagline: e.target.value})}
                placeholder="Ej. Sonido de alta definición y comodidad absoluta."
                className="w-full bg-premium-dark border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white outline-none focus:border-premium-gold transition-colors"
              />
            </div>

            {/* Prices */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Precio de Venta ($ USD)</label>
              <input
                type="number"
                step="0.01"
                required
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                placeholder="Ej. 199.99"
                className="w-full bg-premium-dark border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white outline-none focus:border-premium-gold transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Precio Original (Opcional, para tachado)</label>
              <input
                type="number"
                step="0.01"
                value={formData.originalPrice}
                onChange={(e) => setFormData({...formData, originalPrice: e.target.value})}
                placeholder="Ej. 249.99"
                className="w-full bg-premium-dark border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white outline-none focus:border-premium-gold transition-colors"
              />
            </div>

            {/* Images list */}
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">URLs de Imágenes (Una URL por línea)</label>
              <textarea
                required
                rows="3"
                value={formData.images}
                onChange={(e) => setFormData({...formData, images: e.target.value})}
                placeholder="https://images.unsplash.com/photo-...\nhttps://images.unsplash.com/photo-..."
                className="w-full bg-premium-dark border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white outline-none focus:border-premium-gold transition-colors resize-none"
              />
            </div>

            {/* Video Url */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">URL de Video Demostrativo (YouTube Embed)</label>
              <input
                type="text"
                value={formData.videoUrl}
                onChange={(e) => setFormData({...formData, videoUrl: e.target.value})}
                placeholder="Ej. https://www.youtube.com/embed/..."
                className="w-full bg-premium-dark border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white outline-none focus:border-premium-gold transition-colors"
              />
            </div>

            {/* Tags */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Tags (Separados por coma)</label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({...formData, tags: e.target.value})}
                placeholder="Ej. Destacado, Best Seller, Nuevo"
                className="w-full bg-premium-dark border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white outline-none focus:border-premium-gold transition-colors"
              />
            </div>

            {/* Technical Specifications */}
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Especificaciones Técnicas (Formato Clave: Valor, una por línea)</label>
              <textarea
                rows="4"
                value={formData.specs}
                onChange={(e) => setFormData({...formData, specs: e.target.value})}
                placeholder="Material: Aluminio anodizado&#10;Garantía: 12 meses&#10;Autonomía: 40 horas"
                className="w-full bg-premium-dark border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white outline-none focus:border-premium-gold transition-colors resize-none"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Descripción Ampliada del Producto</label>
              <textarea
                required
                rows="4"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Escribe los detalles y ventajas del producto..."
                className="w-full bg-premium-dark border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white outline-none focus:border-premium-gold transition-colors resize-none"
              />
            </div>

          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-white/5">
            <button
              type="button"
              onClick={() => { setActiveTab('list'); resetForm(); }}
              className="px-5 py-3 bg-transparent text-gray-400 hover:text-white text-xs font-semibold rounded-xl"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-premium-gold text-premium-dark text-xs font-extrabold rounded-xl hover:bg-white transition-colors flex items-center gap-1.5"
            >
              <Save className="w-4 h-4" /> {activeTab === 'add' ? 'Crear Producto' : 'Guardar Cambios'}
            </button>
          </div>
        </form>
      )}

      {/* Guide Note Box */}
      <div className="bg-premium-navy/30 border border-premium-gold/20 p-5 rounded-2xl text-xs sm:text-sm text-gray-400 space-y-2">
        <h4 className="font-bold text-white flex items-center gap-1.5">
          <AlertCircle className="w-4.5 h-4.5 text-premium-gold" /> Guía del Administrador
        </h4>
        <p className="leading-relaxed">
          Cualquier cambio que realices aquí se aplicará <strong>instantáneamente en tu navegador</strong> mediante almacenamiento local (`localStorage`).
        </p>
        <p className="leading-relaxed">
          Para guardar los cambios de forma permanente en los archivos de tu proyecto y que todos tus clientes los vean al subir la web, simplemente haz clic en el botón <strong>"Exportar Base de Datos"</strong> arriba. Se descargará el archivo `products.js`. Reemplázalo en tu carpeta en:
          <br />
          <code className="text-white block mt-1.5 bg-premium-dark px-3 py-1.5 rounded-lg border border-white/5 font-mono text-[11px] sm:text-xs">
            Web Lobo / src / data / products.js
          </code>
        </p>
      </div>

    </div>
  );
}
