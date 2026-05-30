import React from 'react';
import { Star, MessageSquare, Plus, Check } from 'lucide-react';

export default function ProductReviews({ reviews, onAddReview }) {
  const [formOpen, setFormOpen] = React.useState(false);
  const [rating, setRating] = React.useState(5);
  const [author, setAuthor] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [comment, setComment] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author || !comment || !title) return;

    onAddReview({
      id: `r-local-${Date.now()}`,
      author,
      rating,
      date: new Date().toISOString().split('T')[0],
      title,
      comment
    });

    setSubmitted(true);
    setTimeout(() => {
      setFormOpen(false);
      setSubmitted(false);
      setAuthor('');
      setTitle('');
      setComment('');
      setRating(5);
    }, 1500);
  };

  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="bg-premium-lightDark/50 border border-white/5 rounded-2xl p-6 md:p-8 text-left mt-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-8 mb-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Opiniones de los Clientes</h3>
          <div className="flex items-center gap-3">
            <span className="text-4xl font-extrabold text-white">{averageRating}</span>
            <div>
              <div className="flex text-premium-gold">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 fill-current ${i < Math.round(averageRating) ? 'text-premium-gold' : 'text-gray-600'}`} 
                  />
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-0.5">Basado en {reviews.length} valoraciones</p>
            </div>
          </div>
        </div>

        <button 
          onClick={() => setFormOpen(!formOpen)}
          className="flex items-center justify-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs rounded-full border border-white/10 transition-colors"
        >
          <Plus className="w-4 h-4" /> Escribir Reseña
        </button>
      </div>

      {/* Review Form */}
      {formOpen && (
        <div className="mb-10 bg-premium-dark border border-white/5 rounded-xl p-5 md:p-6 animate-fade-in">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-3">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white">¡Reseña Enviada!</h4>
              <p className="text-xs text-gray-500 mt-1">Gracias por compartir tu experiencia con nosotros.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h4 className="font-bold text-white text-sm mb-2">Comparte tu opinión</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">Tu Nombre</label>
                  <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Ej. Juan Pérez"
                    className="w-full bg-premium-lightDark border border-white/10 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-premium-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">Calificación</label>
                  <div className="flex gap-1.5 py-1">
                    {[1, 2, 3, 4, 5].map((val) => (
                      <button
                        type="button"
                        key={val}
                        onClick={() => setRating(val)}
                        className="text-gray-600 hover:text-premium-gold transition-colors"
                      >
                        <Star className={`w-6 h-6 fill-current ${rating >= val ? 'text-premium-gold' : 'text-gray-700'}`} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5">Título de la Reseña</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ej. Excelente calidad de sonido"
                  className="w-full bg-premium-lightDark border border-white/10 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-premium-gold transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5">Comentarios</label>
                <textarea
                  required
                  rows="4"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Cuéntanos qué te pareció el producto..."
                  className="w-full bg-premium-lightDark border border-white/10 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-premium-gold transition-colors resize-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setFormOpen(false)}
                  className="px-4 py-2 bg-transparent text-gray-400 hover:text-white text-xs font-semibold rounded-full"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-premium-gold text-premium-dark text-xs font-extrabold rounded-full hover:bg-white transition-colors"
                >
                  Enviar Reseña
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((rev) => (
          <div key={rev.id} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center font-bold text-premium-gold text-xs">
                  {rev.author.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{rev.author}</h4>
                  <span className="text-[10px] text-gray-500">{rev.date}</span>
                </div>
              </div>
              <div className="flex text-premium-gold">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-3.5 h-3.5 fill-current ${i < rev.rating ? 'text-premium-gold' : 'text-gray-700'}`} 
                  />
                ))}
              </div>
            </div>
            <h5 className="font-bold text-white text-xs mb-1.5">{rev.title}</h5>
            <p className="text-xs text-gray-400 leading-relaxed">{rev.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
