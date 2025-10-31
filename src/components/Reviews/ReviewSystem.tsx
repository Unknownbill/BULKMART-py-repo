// src/components/Reviews/ReviewSystem.tsx
'use client';

import { useState } from 'react';
import { Star, ThumbsUp, Flag, CheckCircle } from 'lucide-react';

interface Review {
  id: string;
  user: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  rating: number;
  title: string;
  comment: string;
  date: string;
  helpful: number;
  verifiedPurchase: boolean;
  images?: string[];
}

interface ReviewStats {
  average: number;
  total: number;
  distribution: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}

interface ReviewSystemProps {
  productId: string;
  productName: string;
}

export default function ReviewSystem({ productId, productName }: ReviewSystemProps) {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: '1',
      user: {
        name: 'Ahmed Bello',
        avatar: 'AB',
        verified: true
      },
      rating: 5,
      title: 'Excellent quality rice!',
      comment: 'The rice quality exceeded my expectations. Well packaged and delivered on time. Will definitely order again.',
      date: '2024-10-15',
      helpful: 12,
      verifiedPurchase: true,
      images: ['/rice1.jpg', '/rice2.jpg']
    },
    {
      id: '2',
      user: {
        name: 'Chioma Nwosu',
        avatar: 'CN',
        verified: true
      },
      rating: 4,
      title: 'Good value for money',
      comment: 'Good quality rice at a reasonable price. Delivery was a bit delayed but customer service was helpful.',
      date: '2024-10-12',
      helpful: 8,
      verifiedPurchase: true
    }
  ]);

  const [stats, setStats] = useState<ReviewStats>({
    average: 4.6,
    total: 156,
    distribution: {
      5: 89,
      4: 45,
      3: 15,
      2: 5,
      1: 2
    }
  });

  const [sortBy, setSortBy] = useState<'recent' | 'helpful' | 'highest' | 'lowest'>('recent');
  const [filterRating, setFilterRating] = useState<number | null>(null);

  const [newReview, setNewReview] = useState({
    rating: 0,
    title: '',
    comment: '',
    images: [] as string[]
  });

  const handleHelpful = (reviewId: string) => {
    setReviews(prev => prev.map(review =>
      review.id === reviewId
        ? { ...review, helpful: review.helpful + 1 }
        : review
    ));
  };

  const handleReport = (reviewId: string) => {
    // In real app, this would trigger a report modal or API call
    console.log('Report review:', reviewId);
  };

  const submitReview = () => {
    if (newReview.rating === 0 || !newReview.title || !newReview.comment) {
      alert('Please fill all required fields');
      return;
    }

    const review: Review = {
      id: Date.now().toString(),
      user: {
        name: 'You', // This would be the actual user's name
        avatar: 'Y',
        verified: true
      },
      rating: newReview.rating,
      title: newReview.title,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0],
      helpful: 0,
      verifiedPurchase: true,
      images: newReview.images
    };

    setReviews(prev => [review, ...prev]);
    
    // Update stats
    setStats(prev => ({
      ...prev,
      average: (prev.average * prev.total + newReview.rating) / (prev.total + 1),
      total: prev.total + 1,
      distribution: {
        ...prev.distribution,
        [newReview.rating as 1 | 2 | 3 | 4 | 5]: prev.distribution[newReview.rating as 1 | 2 | 3 | 4 | 5] + 1
      }
    }));

    // Reset form
    setNewReview({
      rating: 0,
      title: '',
      comment: '',
      images: []
    });
  };

  const filteredReviews = reviews.filter(review =>
    filterRating ? review.rating === filterRating : true
  ).sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'helpful':
        return b.helpful - a.helpful;
      case 'highest':
        return b.rating - a.rating;
      case 'lowest':
        return a.rating - b.rating;
      default:
        return 0;
    }
  });

  const getPercentage = (count: number) => {
    return (count / stats.total) * 100;
  };

  return (
    <div className="space-y-8">
      {/* Review Summary */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Overall Rating */}
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 mb-2">{stats.average.toFixed(1)}</div>
            <div className="flex justify-center mb-2">
              {[1, 2, 3, 4, 5].map(star => (
                <Star
                  key={star}
                  className={`h-6 w-6 ${
                    star <= Math.floor(stats.average)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600">{stats.total} reviews</p>
          </div>

          {/* Rating Distribution */}
          <div className="md:col-span-2">
            {[5, 4, 3, 2, 1].map(rating => (
              <div key={rating} className="flex items-center space-x-3 mb-2">
                <button
                  onClick={() => setFilterRating(filterRating === rating ? null : rating)}
                  className={`flex items-center space-x-1 w-16 ${
                    filterRating === rating ? 'text-primary font-semibold' : 'text-gray-600'
                  }`}
                >
                  <span>{rating}</span>
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                </button>
                
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{ width: `${getPercentage(stats.distribution[rating as keyof typeof stats.distribution])}%` }}
                  ></div>
                </div>
                
                <span className="text-sm text-gray-600 w-12">
                  {stats.distribution[rating as keyof typeof stats.distribution]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Write Review */}
      <div className="card">
        <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
        
        <div className="space-y-4">
          {/* Star Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Rating *
            </label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  onClick={() => setNewReview(prev => ({ ...prev, rating: star }))}
                  className="p-1"
                >
                  <Star
                    className={`h-8 w-8 ${
                      star <= newReview.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Review Title */}
          <div>
            <label htmlFor="reviewTitle" className="block text-sm font-medium text-gray-700 mb-2">
              Review Title *
            </label>
            <input
              type="text"
              id="reviewTitle"
              value={newReview.title}
              onChange={(e) => setNewReview(prev => ({ ...prev, title: e.target.value }))}
              placeholder="Summarize your experience"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Review Comment */}
          <div>
            <label htmlFor="reviewComment" className="block text-sm font-medium text-gray-700 mb-2">
              Your Review *
            </label>
            <textarea
              id="reviewComment"
              value={newReview.comment}
              onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
              rows={4}
              placeholder="Share details of your experience with this product"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={submitReview}
            disabled={newReview.rating === 0 || !newReview.title || !newReview.comment}
            className="btn-primary disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Submit Review
          </button>
        </div>
      </div>

      {/* Reviews Filter and Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {filteredReviews.length} {filterRating ? `${filterRating}-star ` : ''}reviews
          </h3>
        </div>
        
        <div className="flex space-x-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="recent">Most Recent</option>
            <option value="helpful">Most Helpful</option>
            <option value="highest">Highest Rated</option>
            <option value="lowest">Lowest Rated</option>
          </select>
          
          {filterRating && (
            <button
              onClick={() => setFilterRating(null)}
              className="text-sm text-primary hover:text-primary-700 font-medium"
            >
              Clear Filter
            </button>
          )}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {filteredReviews.map(review => (
          <div key={review.id} className="card">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {review.user.avatar}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-gray-900">{review.user.name}</h4>
                    {review.user.verified && (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= review.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span>•</span>
                    <span>{review.date}</span>
                    {review.verifiedPurchase && (
                      <>
                        <span>•</span>
                        <span className="text-green-600 font-medium">Verified Purchase</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <h5 className="font-semibold text-gray-900 mb-2">{review.title}</h5>
            <p className="text-gray-700 mb-4">{review.comment}</p>

            {/* Review Images */}
            {review.images && review.images.length > 0 && (
              <div className="flex space-x-2 mb-4">
                {review.images.map((image, index) => (
                  <div
                    key={index}
                    className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <span className="text-xs text-gray-500">Image {index + 1}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Review Actions */}
            <div className="flex justify-between items-center">
              <button
                onClick={() => handleHelpful(review.id)}
                className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-800"
              >
                <ThumbsUp className="h-4 w-4" />
                <span>Helpful ({review.helpful})</span>
              </button>
              
              <button
                onClick={() => handleReport(review.id)}
                className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-800"
              >
                <Flag className="h-4 w-4" />
                <span>Report</span>
              </button>
            </div>
          </div>
        ))}

        {filteredReviews.length === 0 && (
          <div className="card text-center py-8">
            <p className="text-gray-600">No reviews found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}