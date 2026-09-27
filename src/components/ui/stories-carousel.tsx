'use client';

import type { ComponentProps, HTMLAttributes, VideoHTMLAttributes } from 'react';
import { useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export type StoriesProps = ComponentProps<typeof Carousel>;

export const Stories = ({ className, opts, ...props }: StoriesProps) => (
    <Carousel
        className={cn('w-full', className)}
        opts={{
            align: 'start',
            loop: false,
            dragFree: true,
            ...opts,
        }}
        {...props}
    />
);

export type StoriesContentProps = ComponentProps<typeof CarouselContent>;

export const StoriesContent = ({ className, ...props }: StoriesContentProps) => (
    <CarouselContent className={cn('gap-2 md:gap-4', className)} {...props} />
);

export type StoryProps = HTMLAttributes<HTMLDivElement>;

export const Story = ({ className, ...props }: StoryProps) => (
    <CarouselItem className="basis-auto pl-2 md:pl-4">
        <div
            className={cn(
                'group relative overflow-hidden rounded-xl bg-neutral-200',
                'cursor-pointer transition-all duration-300',
                'hover:shadow-2xl hover:brightness-105',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                className
            )}
            role="button"
            tabIndex={0}
            {...props}
        />
    </CarouselItem>
);

export type StoryVideoProps = VideoHTMLAttributes<HTMLVideoElement>;

const tRegex = /t=(\d+(?:\.\d+)?)/;

export const StoryVideo = ({ className, ...props }: StoryVideoProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const initialTimeRef = useRef<number>(0);

    useEffect(() => {
        const src = (props.src ?? '') as string;
        let initialTime = 0;
        if (typeof src === 'string') {
            const hashIndex = src.indexOf('#');
            if (hashIndex !== -1) {
                const hash = src.slice(hashIndex + 1);
                const tMatch = hash.match(tRegex);
                if (tMatch) {
                    initialTime = Number.parseFloat(tMatch[1]);
                }
            }
        }
        initialTimeRef.current = initialTime;
    }, [props.src]);

    const handleMouseOver = () => { videoRef.current?.play(); };
    const handleMouseOut = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = initialTimeRef.current;
        }
    };

    const handleFocus = () => { videoRef.current?.play(); };
    const handleBlur = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = initialTimeRef.current;
        }
    };

    return (
        <video
            className={cn(
                'absolute inset-0 size-full object-cover',
                'transition-opacity duration-200',
                'group-hover:opacity-90',
                className
            )}
            loop
            muted
            onBlur={handleBlur}
            onFocus={handleFocus}
            onMouseOut={handleMouseOut}
            onMouseOver={handleMouseOver}
            preload="metadata"
            ref={videoRef}
            tabIndex={0}
            {...props}
        />
    );
};

export type StoryOverlayProps = HTMLAttributes<HTMLDivElement> & {
    side?: 'top' | 'bottom';
};

export const StoryOverlay = ({ className, side = 'bottom', ...props }: StoryOverlayProps) => {
    const positionClasses = side === 'top' ? 'top-0 bg-gradient-to-b' : 'bottom-0 bg-gradient-to-t';
    return (
        <div
            className={cn(
                'absolute right-0 left-0 h-16 from-black/60 to-transparent pointer-events-none',
                positionClasses,
                className
            )}
            {...props}
        />
    );
};

export type StoryAuthorProps = HTMLAttributes<HTMLDivElement>;

export const StoryAuthor = ({ className, children, ...props }: StoryAuthorProps) => (
    <div className={cn('absolute right-0 bottom-0 left-0 z-10 p-3 text-white', className)} {...props}>
        <div className="flex items-center gap-2">{children}</div>
    </div>
);

export type StoryAuthorImageProps = ComponentProps<typeof Avatar> & {
    src?: string;
    name?: string;
    fallback?: string;
};

export const StoryAuthorImage = ({ src, fallback, name, className, ...props }: StoryAuthorImageProps) => (
    <Avatar className={cn('size-7 border border-white/30', className)} {...props}>
        {src && <AvatarImage alt={name} src={src} />}
        <AvatarFallback className="bg-white/20 text-white text-xs backdrop-blur-sm">
            {fallback || name?.charAt(0)?.toUpperCase()}
        </AvatarFallback>
    </Avatar>
);

export type StoryAuthorNameProps = HTMLAttributes<HTMLSpanElement>;

export const StoryAuthorName = ({ className, ...props }: StoryAuthorNameProps) => (
    <span className={cn('truncate font-medium text-xs md:text-sm drop-shadow', className)} {...props} />
);