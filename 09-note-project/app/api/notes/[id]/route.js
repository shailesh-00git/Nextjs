import Note from "@/models/Note";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await dbConnect();
    const note = await Note.findByIdAndDelete(id);
    if (!note) {
      return NextResponse.json(
        { success: false, error: "note not found" },
        { status: 404 },
      );
    }
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "note not found" },
      { status: 400 },
    );
  }
}

// function to edit the notes
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    await dbConnect();
    const body = await request.json();
    const note = await Note.findByIdAndUpdate(
      id,
      {
        ...body,
        updatedAt: new Date(),
      },
      { returnDocument: "after", runValidators: true },
    );

    if (!note) {
      return NextResponse.json(
        { success: false, error: "note not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: note });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 },
    );
  }
}
