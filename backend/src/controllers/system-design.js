import { asyncHandler, ApiError, getSlug } from "../utils";
import { SystemDesign } from "../models";

/**
 * @desc    Create a new system design
 * @route   POST /api/v1/system-designs
 */
export const createSystemDesign = asyncHandler(async (req, res) => {
  const { title, type, video, sections } = req.body;

  const slug = getSlug(title);
  
  const systemDesign = await SystemDesign.create({
    title,
    slug,
    author,
    tags,
    status,
    type,
    video,
    sections,
  });

  res.status(201).json({
    success: true,
    data: systemDesign,
  });
});

/**
 * @desc    Get all system designs with optional filters
 * @route   GET /api/v1/system-designs
 */
export const getAllSystemDesigns = asyncHandler(async (req, res) => {
  const {
    status,
    type,
    author,
    tag,
    search,
    page = 1,
    limit = 10,
  } = req.query;

  const filter = {};

  if (status) filter.status = status;
  if (type) filter.type = type;
  if (author) filter.author = author;
  if (tag) filter.tags = tag;
  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: "i" } },
      { slug: { $regex: search, $options: "i" } },
    ];
  }

  const pageNum = Math.max(1, parseInt(page, 10));
  const limitNum = Math.max(1, Math.min(50, parseInt(limit, 10)));
  const skip = (pageNum - 1) * limitNum;

  const [data, total] = await Promise.all([
    SystemDesign.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNum)
      .populate("author", "name email"),
    SystemDesign.countDocuments(filter),
  ]);

  res.status(200).json({
    success: true,
    data,
    pagination: {
      total,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.ceil(total / limitNum),
    },
  });
});

/**
 * @desc    Get a single system design by ID
 * @route   GET /api/v1/system-designs/:id
 */
export const getSystemDesignById = asyncHandler(async (req, res) => {
  const systemDesign = await SystemDesign.findById(req.params.id).populate(
    "author",
    "name email"
  );

  if (!systemDesign) {
    throw new ApiError(404, "System design not found");
  }

  res.status(200).json({
    success: true,
    data: systemDesign,
  });
});

/**
 * @desc    Get a single system design by slug
 * @route   GET /api/v1/system-designs/slug/:slug
 */
export const getSystemDesignBySlug = asyncHandler(async (req, res) => {
  const systemDesign = await SystemDesign.findOne({
    slug: req.params.slug,
  }).populate("author", "name email");

  if (!systemDesign) {
    throw new ApiError(404, "System design not found");
  }

  res.status(200).json({
    success: true,
    data: systemDesign,
  });
});

/**
 * @desc    Update a system design
 * @route   PUT /api/v1/system-designs/:id
 */
export const updateSystemDesign = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const systemDesign = await SystemDesign.findById(id);
  if (!systemDesign) {
    throw new ApiError(404, "System design not found");
  }

  // If slug is being changed, check uniqueness
  if (req.body.slug && req.body.slug !== systemDesign.slug) {
    const slugExists = await SystemDesign.findOne({ slug: req.body.slug });
    if (slugExists) {
      throw new ApiError(409, "A system design with this slug already exists");
    }
  }

  const updated = await SystemDesign.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  }).populate("author", "name email");

  res.status(200).json({
    success: true,
    data: updated,
  });
});

/**
 * @desc    Delete a system design
 * @route   DELETE /api/v1/system-designs/:id
 */
export const deleteSystemDesign = asyncHandler(async (req, res) => {
  const systemDesign = await SystemDesign.findByIdAndDelete(req.params.id);

  if (!systemDesign) {
    throw new ApiError(404, "System design not found");
  }

  res.status(200).json({
    success: true,
    message: "System design deleted successfully",
  });
});
